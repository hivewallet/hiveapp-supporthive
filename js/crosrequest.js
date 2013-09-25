/**
 * Created with PyCharm.
 * User: martut
 * Date: 9/8/13
 * Time: 1:31 PM
 * To change this template use File | Settings | File Templates.
 */

    // Create the XHR object.
    function createCORSRequest(method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
      } else {
        // CORS not supported.
        xhr = null;
      }
      return xhr;
    }

    // Helper method to parse the title tag from the response.
    function getTitle(text) {
      return text.match('<title>(.*)?</title>')[1];
    }

    // Make the actual CORS request.
    /*function makeCorsRequest() {
      // All HTML5 Rocks properties support CORS.
      var url = 'http://coinforest.com/bitcoin-paper-wallets.php';

      var xhr = createCORSRequest('POST', url);
      if (!xhr) {
        alert('CORS not supported');
        return;
      }

      // Response handlers.
      xhr.onload = function() {
        var text = xhr.responseText;
        var title = getTitle(text);
        //$('#page').html(text);
        //alert('Response from CORS request to ' + url + ': title = ' + title);
      };

      xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
      };

      xhr.send();
    }*/
