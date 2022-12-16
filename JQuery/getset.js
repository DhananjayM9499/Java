$(document).ready(function () {
  $("#validate").click(function () {
    alert("Working");
  });
  $("#show").click(function () {
    $("textarea").val(
      "Name: " +
        $("#name").val() +
        "\n" +
        "Age: " +
        $("#age").val() +
        "\n" +
        "Address: " +
        $("#address").val()
    );
  });
});
