//jquery
$( function() {
    $( "#dome" ).draggable();
  } );
 $( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );
 $( "#resizable" ).resizable();
 $( "#selectable" ).selectable();
 $( "#sortable" ).sortable();
 $( "#accordion" ).accordion();



 $( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme",
    ];
    $( "#topics" ).autocomplete({
      source: availableTags
    });
  } );
 $( function() {
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
      $( "input" ).checkboxradio();
    } );
  } );
 $( "#datepicker" ).datepicker();
 $( "#dialog" ).dialog();
 $( "#menu" ).menu();


 $( function() {
    $( "#progressbar" ).progressbar({
      value: 37
    });
  } );

  $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();




     $( "#slider" ).slider();




     var spinner = $( "#spinner" ).spinner();
 
    $( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $( "#destroy" ).on( "click", function() {
      if ( spinner.spinner( "instance" ) ) {
        spinner.spinner( "destroy" );
      } else {
        spinner.spinner();
      }
    });
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();



$( "#tabs" ).tabs();


 $( document ).tooltip();




