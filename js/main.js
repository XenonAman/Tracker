var tableValue = [
  ["Order Number", "Service Name", "PON", "NDD", "Issue", "Remark"],
  ["Order Number2", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  ["Order Number3", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  ["Order Number4", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  ["Order Number1", "Service Name", "PON", "NDD", "Issue", "Remark"],
  ["Order Number2", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  ["Order Number3", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  ["Order Number4", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number1", "Service Name", "PON", "NDD", "Issue", "Remark"],
  // ["Order Number2", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number3", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number4", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number2", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number3", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number4", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number2", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number3", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number4", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number2", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number3", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number4", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number2", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number3", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"],
  // ["Order Number4", "Service Name", "PON", "NDD", "Issue", "Remark to test the overflow issue if needed"]
];


function addToList() {
    var oNum = document.getElementById("oderN").value;
    var sID = document.getElementById("sid").value;
    var pON = document.getElementById("pon").value;
    var nDD = document.getElementById("ndd").value;
    var issue = document.getElementById("issue").value;
    var remark = document.getElementById("remark").value;

        
    if (oNum == "") {
      document.getElementById("errorM").innerHTML = "Order Number is Blank";
    } else if(!isNaN(oNum)){
      if (remark.trim()=="") {
        document.getElementById("errorM").innerHTML = "Remark is Blank";
      } else {
        addToTable();
        savedAction();
      }
    }else {
      document.getElementById("errorM").innerHTML = "Invalid Order Number";
    }

    function savedAction() {
      document.getElementById("iForm").reset();
      document.getElementById("errorM").style.color = "green";
      document.getElementById("errorM").innerHTML = "Saved Successfully";
      setInterval(function() {
        document.getElementById("errorM").innerHTML = "";
        document.getElementById("errorM").style.color = "red";
      }, 2000);  // this is to hide the error msg after each 2 sec //loop
    }

    function addToTable() {
      tableValue.push([oNum, sID, pON, nDD, issue, remark]); 
      setTimeout(function() {
        alert(tableValue);
        $( "#dataTable" ).load( "ajax/index.html #dataTable" );
      }, 500); //this is to refersh table after 0.5 sec //once
    }
  }

  // setInterval(function() {
  //   $("#dataTable").load(" #dataTable");
  // }, 1000);

  function downloadCSV(){
    let csvContent = "data:text/csv;charset=utf-8,";

    tableValue.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });

    var mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var d = new Date();
    var day = (d.getDate()<10) ? "0" + d.getDate() : d.getDate() 
    var hr = (d.getHours()<10) ? "0" + d.getHours() : d.getHours() 
    var min = (d.getMinutes()<10) ? "0" + d.getMinutes() : d.getMinutes()
    var fileName = day+"-"+mon[d.getMonth()]+"-"+d.getFullYear()+" ("+hr+" "+min+")";
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download",fileName+".csv");
    document.body.appendChild(link);
    link.click();
  }