$(document).ready(function() {
  // This uses AJAX to load the data of the character name passed in.

  $('.rancor').hide();
  $('#rancor').hide();
  $('.event').hide();
  $('#event1').hide();
  $('#event2').hide();
  $('#event3').hide();
  $('#event4').hide();
  $('#event5').hide();
  $('#event6').hide();
  $('#event6').hide();
  $('.aat').hide();
  $('#aat').hide();
  $('#haat').hide();
  $('.tst').hide();
  $('#tst').hide();
  $('.heroicaat').hide();
  //$('#rosterlist').hide();

  var loading = false;

  getprofile = function (profile){
    var profile = "profile.php?profile="+profile
  	$.ajax({
  	  url: profile,
  	  dataType: 'text',
      timeout: 0,
      async: false,
  	  success: function(html) {
  		// write the data to the #output div
        loading= false;
  		  $("#output").html(html);
        $("#profile-input-btn").html("Load another profile!");
  	  }
  	});
  };

  var tlocation;
  var tname;
  var trarity;
  var tgear;
  var tlevel;

  $('#profile-input').keyup(function(e){
    if(e.keyCode == 13){
	  $( "#profile-input-btn" ).click();
	}
  });


  $( "#profile-input-btn" ).click(function() {
    if (!$("#profile-input").val()){
      $("#output").html("<p>Please Enter a Character Name</p>");
      return;
    }
    if (loading==false){
      $("#output").html("<p>No such profile! Refresh and try again!</p>");
      loading=true;
      getprofile($("#profile-input").val())


      var ary = [];
      var a = 0;

	  $('tr:gt(0)').each(function(i) {
  		ary[a] = [];
	    ary[a]["toon"] = $('td:first', this).text();
	    ary[a]["rlevel"] = +$('td:eq(1)', this).text();
	    ary[a]["glevel"] = +$('td:eq(2)', this).text();
	    ary[a]["llevel"] = +$('td:eq(3)', this).text();
	    a++;
	  });

	  findcharacter = function(chara){
		var theIndex = -1;
		for (var i = 0; i < ary.length; i++) {
		  if (ary[i]["toon"] == chara) {
			theIndex = i;
			break;
		  }
		}

		tlocation = ary[theIndex];
		tname = tlocation["toon"];
		trarity = tlocation["rlevel"];
		tgear = tlocation["glevel"];
		tlevel = tlocation["llevel"];

		//$('#rostertable').hide();
		$('.tst').show();
		$('#tst').show();
		$('.rancor').show();
		$('#rancor').show();
		$('.aat').show();
		$('#aat').show();
		$('.heroicaat').show();
		$('#haat').show();
		$('.event').show();
		$('#event1').show();
	  $('#event2').show();
	  $('#event3').show();
	  $('#event4').show();
	  $('#event5').show();
	  $('#event6').show();
	  $('#event7').show();

	  }

		//rancor colour coding
		$(".rancorraid tr:gt(0)").each(function() {
			if($("td:first",this).html()=="Name"){
				console.log("Found a header - ewwwww!");
			}else{
			var character = $("td:first",this).html();
			findcharacter(character);
			$("td:eq(1)",this).html(trarity);
			$("td:eq(2)",this).html(tgear);
			$("td:eq(3)",this).html(tlevel);
				//Rarity Analysis
				if(trarity>=7){
					//$("td:eq(4)",this).html("Yes");
					$("td:eq(1)",this).css("background-color","#87dc67");
				}else if(trarity<=6 && trarity!=0){
					$("td:eq(1)",this).css("background-color","#decf62");
				}else{
					$("td:eq(1)",this).css("background-color","#e07d86");
				}
				//Gear Analysis
				if(tgear>=8){
					//$("td:eq(4)",this).html("Yes");
					$("td:eq(2)",this).css("background-color","#87dc67");
				}else if(tgear<=7 && tgear!=0){
					$("td:eq(2)",this).css("background-color","#decf62");
				}else{
					$("td:eq(2)",this).css("background-color","#e07d86");
				}
				//Level Analysis
				if(tlevel>=80){
					//$("td:eq(4)",this).html("Yes");
					$("td:eq(3)",this).css("background-color","#87dc67");
				}else if(tlevel<=79 && tlevel!=0){
					$("td:eq(3)",this).css("background-color","#decf62");
				}else{
					$("td:eq(3)",this).css("background-color","#e07d86");
				}
				//Ready Check
				if(trarity>=7 && tgear>=8 && tlevel>=80){
					$("td:eq(4)",this).html("Yes!");
					$("td:eq(4)",this).css("background-color","#87dc67");
				}else{
					$("td:eq(4)",this).html("No!");
					$("td:eq(4)",this).css("background-color","#e07d86");
				}

			}
		});


		//tank normal colour coding
		$(".aatraid tr:gt(0)").each(function() {
			if($("td:first",this).html()=="Name"){
				console.log("Found a header - ewwwww!");
			}else{
			var character = $("td:first",this).html();
			findcharacter(character);
			$("td:eq(1)",this).html(trarity);
			$("td:eq(2)",this).html(tgear);
			$("td:eq(3)",this).html(tlevel);
				//Rarity Analysis
				if(trarity>=6){
					//$("td:eq(4)",this).html("Yes");
					$("td:eq(1)",this).css("background-color","#87dc67");
				}else if(trarity<=5 && trarity!=0){
					$("td:eq(1)",this).css("background-color","#decf62");
				}else{
					$("td:eq(1)",this).css("background-color","#e07d86");
				}
				//Gear Analysis
				if(tgear>=8){
					//$("td:eq(4)",this).html("Yes");
					$("td:eq(2)",this).css("background-color","#87dc67");
				}else if(tgear<=7 && tgear!=0){
					$("td:eq(2)",this).css("background-color","#decf62");
				}else{
					$("td:eq(2)",this).css("background-color","#e07d86");
				}
				//Level Analysis
				if(tlevel>=80){
					//$("td:eq(4)",this).html("Yes");
					$("td:eq(3)",this).css("background-color","#87dc67");
				}else if(tlevel<=79 && tlevel!=0){
					$("td:eq(3)",this).css("background-color","#decf62");
				}else{
					$("td:eq(3)",this).css("background-color","#e07d86");
				}
				//Ready Check
				if(trarity>=6 && tgear>=8 && tlevel>=80){
					$("td:eq(4)",this).html("Yes!");
					$("td:eq(4)",this).css("background-color","#87dc67");
				}else{
					$("td:eq(4)",this).html("No!");
					$("td:eq(4)",this).css("background-color","#e07d86");
				}

			}
		});

		//rancor colour coding
		$(".haatraid tr:gt(0)").each(function() {
			if($("td:first",this).html()=="Name"){
				console.log("Found a header - ewwwww!");
			}else{
			var character = $("td:first",this).html();
			findcharacter(character);
			$("td:eq(1)",this).html(trarity);
			$("td:eq(2)",this).html(tgear);
			$("td:eq(3)",this).html(tlevel);
				//Rarity Analysis
				if(trarity>=7){
					//$("td:eq(4)",this).html("Yes");
					$("td:eq(1)",this).css("background-color","#87dc67");
				}else if(trarity<=6 && trarity!=0){
					$("td:eq(1)",this).css("background-color","#decf62");
				}else{
					$("td:eq(1)",this).css("background-color","#e07d86");
				}
				//Gear Analysis
				if(tgear>=10){
					//$("td:eq(4)",this).html("Yes");
					$("td:eq(2)",this).css("background-color","#87dc67");
				}else if(tgear<=9 && tgear!=0){
					$("td:eq(2)",this).css("background-color","#decf62");
				}else{
					$("td:eq(2)",this).css("background-color","#e07d86");
				}
				//Level Analysis
				if(tlevel>=85){
					//$("td:eq(4)",this).html("Yes");
					$("td:eq(3)",this).css("background-color","#87dc67");
				}else if(tlevel<=84 && tlevel!=0){
					$("td:eq(3)",this).css("background-color","#decf62");
				}else{
					$("td:eq(3)",this).css("background-color","#e07d86");
				}
				//Ready Check
				if(trarity>=7 && tgear>=10 && tlevel>=85){
					$("td:eq(4)",this).html("Yes!");
					$("td:eq(4)",this).css("background-color","#87dc67");
				}else{
					$("td:eq(4)",this).html("No!");
					$("td:eq(4)",this).css("background-color","#e07d86");
				}

			}
		});

//sith raid colour coding
		$(".tstraid tr:gt(0)").each(function() {
			if($("td:first",this).html()=="Name"){
				console.log("Found a header - ewwwww!");
			}else{
			var character = $("td:first",this).html();
			findcharacter(character);
			$("td:eq(1)",this).html(trarity);
			$("td:eq(2)",this).html(tgear);
			$("td:eq(3)",this).html(tlevel);
				//Rarity Analysis
				if(trarity>=7){
					//$("td:eq(4)",this).html("Yes");
					$("td:eq(1)",this).css("background-color","#87dc67");
				}else if(trarity<=6 && trarity!=0){
					$("td:eq(1)",this).css("background-color","#decf62");
				}else{
					$("td:eq(1)",this).css("background-color","#e07d86");
				}
				//Gear Analysis
				if(tgear>=11){
					//$("td:eq(4)",this).html("Yes");
					$("td:eq(2)",this).css("background-color","#87dc67");
				}else if(tgear<=10 && tgear!=0){
					$("td:eq(2)",this).css("background-color","#decf62");
				}else{
					$("td:eq(2)",this).css("background-color","#e07d86");
				}
				//Level Analysis
				if(tlevel>=85){
					//$("td:eq(4)",this).html("Yes");
					$("td:eq(3)",this).css("background-color","#87dc67");
				}else if(tlevel<=84 && tlevel!=0){
					$("td:eq(3)",this).css("background-color","#decf62");
				}else{
					$("td:eq(3)",this).css("background-color","#e07d86");
				}
				//Ready Check
				if(trarity>=7 && tgear>=11 && tlevel>=85){
					$("td:eq(4)",this).html("Yes!");
					$("td:eq(4)",this).css("background-color","#87dc67");
				}else{
					$("td:eq(4)",this).html("No!");
					$("td:eq(4)",this).css("background-color","#e07d86");
				}

			}
		});


		//$('#rosterlist').show();


    }

  });

});





/*
var photos = [];
var a = 0;
$("#photos img").each(function(i) {
    photos[a] = [];
    photos[a]["url"] = this.src;
    photos[a]["caption"] = this.alt;
    photos[a]["background"] = this.css('background-color');
    a++;
});
*/
