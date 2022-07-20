$(() => {
  $("#button-0").on("click", () => $("#button-0").hide());
  $("#button-1").on("click", () => $("#element-0").show());
  $("#button-2").on("click", () => $("#element-0").hide());
  $("#button-3").on("click", () => {
    $("#element-1").fadeIn("slow");
    $("#element-2").fadeOut("slow");
    $("#element-3").fadeToggle("slow");
    $("#element-4").fadeTo("slow", 0.5);
  });  
  $("#button-4").on("click", () => $("#element-5").slideDown());
  $("#button-5").on("click", () => $("#element-6").slideUp());
  $("#button-6").on("click", () => $("#element-7").slideToggle());
  $("#button-7").on("click", () => $("#element-8").animate({ left: "75px" }));
  $("#button-8").on("click", () => {
    $("#element-9").animate({"left": "75px"});
    $("#element-9").animate({"height": "75px", "font-size": "35px", "text-align": "center", "text-justify": "center"});
    $("#element-9").text("Joder, muestre una teta");
  });
  $("#button-9").on("click", () => {
    $("#element-10").animate({"height": "toggle"});
    $("#element-10").animate({"width": "+=75px"});
  });
  $("#button-10").on("click", () => $("#element-11").slideUp().css("background-color", "red").slideDown());
  $("#button-11").on("click", () => {
    let texto = $("#element-12").text();
    let etiqueta = $("#element-13").html();
    let valor = $("#element-14").val();
    $("#element-12").text("Cambie mi texto");
    $("#element-13").html("<b>Cambie mi etiqueta</b>");
    $("#element-14").val("Cambie mi valor");
    alert(`Un elemento cambio su texto de ${texto} a "Cambie mi texto"`);
    alert(`Un elemento cambio su etiqueta de ${etiqueta} a "<b>"`);
    alert(`Un elemento cambio su valor de ${valor} a "Cambie mi valor"`);
  });
  $("#button-12").on("click", () => $("#element-15").load("/static/other/example.json"));
  $("#button-13").on("click", () => $.get("/static/other/example.json",
    (data, status) => alert("Data: " + `{name: ${data.name}, language: ${data.language}}` +
      "\nStatus: " + status)));
});