const recomendations = require('../data/recomendations');

// Handler untuk mendapatkan daftar rekomendasi berdasarkan parameter active
const getRecomendations = (request, h) => {
  const { active } = request.query;
  const filteredRecomendations = recomendations.filter((rec) => rec.active === parseInt(active));

  return h.response({
    error: false,
    message: 'Recomendations fetched successfully',
    listRecomendations: filteredRecomendations,
  });
};

// Handler untuk mendapatkan detail rekomendasi berdasarkan id
const getRecomendationById = (request, h) => {
  const { id } = request.params;
  const recomendation = recomendations.find((rec) => rec.id === parseInt(id));

  if (recomendation) {
    return h.response({
      error: false,
      message: 'Recomendations fetched successfully',
      recomendation: recomendation,
    });
  }

  return h.response({
    error: true,
    message: `Recomendation with id ${id} not found.`,
  }).code(404);
};

module.exports = {
  getRecomendations,
  getRecomendationById,
};
