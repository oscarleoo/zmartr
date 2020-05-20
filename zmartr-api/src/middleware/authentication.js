import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

const authentication = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-empxgoi7.eu.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://api.zmartr.com',
  issuer: 'https://dev-empxgoi7.eu.auth0.com/',
  algorithms: ['RS256'],
});

export default authentication;
