const handler = require('../handler/handler');

const routes = [
  {
    method: 'GET',
    path: '/recomendations',
    handler: handler.getRecomendations,
  },
  {
    method: 'GET',
    path: '/recomendations/{id}',
    handler: handler.getRecomendationById,
  },
];

module.exports = routes;
