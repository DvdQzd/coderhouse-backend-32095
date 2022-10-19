import { Strategy as TwitterStrategy } from 'passport-twitter'

const TWITTER_CONSUMER_KEY = 'YOUR_TWITTER_CONSUMER_KEY';
const TWITTER_CONSUMER_SECRET = 'YOUR_TWITTER_CONSUMER_SECRET';

export const loginTwitter = new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: '/auth/twitter/callback',
}, (token, tokenSecret, userProfile, done) => {
    const userData = {
        id: userProfile.id,
        username: userProfile.username,
        displayName: userProfile.displayName,
        photos: userProfile.photos,
    }
    return done(null, userData);
})

