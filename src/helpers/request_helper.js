const RequestHelper = function (url) {
  this.url = url;
};

RequestHelper.prototype.get = function (onComplete) {
  // requesting data from API
  const xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.addEventListener('load', () => {
    //if not successfull:
    if (xhr.status !== 200) {
      console.error('Request Failed');
      return;
    }

    // turns xhr from raw data string into object
    const data = JSON.parse(xhr.responseText);

    //what to do with the data
    onComplete(data);
  });

  xhr.send();
};

module.exports = RequestHelper;
