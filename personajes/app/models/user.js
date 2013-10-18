var models = require('./models'),
	Schema = models.Schema;

var userSchema = Schema({
	username : 'string',
	twitter  : Schema.Types.Mixed,
	cat_img  : 'string'
});

var User = models.model('user', userSchema);

module.exports = User;