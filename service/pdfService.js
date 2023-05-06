const PDFDocument = require('pdfkit');

function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ bufferPages: true, font: 'Courier' });

  doc.on('data', dataCallback);
  doc.on('end', endCallback);

  doc.fontSize(20).text(`Component based Software Development`);

  doc
    .fontSize(12)
    .text(
      `Component-based software development is a software engineering approach where applications are constructed by combining pre-built, reusable software components. These components are self-contained, modular units that encapsulate specific functionality. They can be developed independently, tested separately, and then seamlessly integrated into larger systems.`
    );
  doc.end();
}

module.exports = { buildPDF };