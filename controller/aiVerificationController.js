const PDFParser = require("pdf2json");

// Xenova ko lazy-load
let classifierPromise = null;

async function getClassifier() {
  if (!classifierPromise) {
    const { pipeline } = await import("@xenova/transformers");
    classifierPromise = pipeline(
      "text-classification",
      "Xenova/distilbert-base-uncased-finetuned-sst-2-english"
    );
  }
  return classifierPromise;
}

exports.getVerification = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "PDF file missing" });
  }

  const pdfParser = new PDFParser();

  pdfParser.on("pdfParser_dataError", (errData) => {
    console.error(errData.parserError);
    res.status(500).json({ error: "PDF parse failed" });
  });

  pdfParser.on("pdfParser_dataReady", async () => {
    try {
      const text = pdfParser.getRawTextContent();

      const classifier = await getClassifier();
      const result = await classifier(text.slice(0, 1000));

      res.json({
        engine: "local-xenova",
        analysis: result,
        note: "AI flags potential issues, human validates finally",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "AI processing failed" });
    }
  });

  // 🔥 KEY LINE — frontend se aaya hua PDF
  pdfParser.parseBuffer(req.file.buffer);
};
