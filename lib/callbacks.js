var data = require('./datastore');

function wait(seconds, callback) {
  setTimeout(callback, (seconds * 1000));
}

function repeat(times, callback) {
  for (var i = 0; i < times; i++) {
    callback(i);
  }
}

// repeat(10, function(iteration) {
//   console.log(100 + iteration);
// });

function User () {
}

User.find = function(query, callback) {
  var err = null;

  // filter loops throught the array
  var filteredUser = data.User.filter(function(user) {
    // loops through properties in each user object
    for (var key in query) {
      if (!user.hasOwnProperty(key)) {
        err = new RangeError('Out of range');

      } else if (typeof query[key] !== typeof (user[key]) ) {
        err = new TypeError('Type error');

      } else if (query[key] === user[key]) {
        // does have property but is not a number
        return true;
      }
    }
  });
  callback(err, filteredUser);
};

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};
