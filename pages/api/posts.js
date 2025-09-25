export default function handler(req, res) {
  res.status(200).json([
    { id: 1, title: "Optimizamos la siembra con visión artificial", body: "Hemos desplegado modelos de IA que analizan imágenes satelitales para optimizar fechas de siembra y reducir el uso de fertilizantes en un 18% en pruebas piloto.", author: 'AgroAI Labs'},
    { id: 2, title: 'Predicción temprana de plagas mediante sensores', body: 'Integrando datos de sensores y modelos predictivos, detectamos episodios de plagas con hasta 7 días de anticipación, ayudando a planificar intervenciones más eficientes.', author: 'AgroAI Labs' },
    { id: 3, title: 'Ahorro de agua con riego inteligente', body: 'Nuestra plataforma recomienda riegos por parcela según humedad y predicción climática, logrando reducciones de consumo hídrico y mayor uniformidad en rendimiento.', author: 'AgroAI Labs' },
  ]);
}

