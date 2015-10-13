function wait(seconds, callback) {
  setTimeout(callback, (seconds * 1000));
}

function repeat (times, callback) {

}

function User () {

}

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};