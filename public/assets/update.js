$("#update").on("submit", function (event) {
    event.preventDefault();
    var updateDev = $("#updateDev").val();
    console.log(updateDev);
    $.ajax({
        url: "/burgers/devour/" + updateDev,
        type: "PUT",
    }).then(function (res) {
        location.reload();
    })
})

$(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });