$("#add_pet").submit(function(event) {
    //alert("Data Inserted Successfully!");
});

$("#update_pet").submit(function(event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    $.map(unindexed_array, function(n, i) {
        data[n['name']] = n['value'];

        if(data[n['name']] == "") {
            alert(`${data[n['name']]} cannot be empty.`);
            window.history.back();
            return false;
        }
    });

    var requests = {
        "url": `http://localhost:3000/api/pets/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(requests).done(function(response) {
        alert("Pet Information Updated Successfully.");
    })

    event.reload();
})

if(window.location.pathname == "/") {
    $ondelete = $("a.delete");
    $ondelete.click(function() {
        var id = $(this).attr("data-id");

        var request = {
            "url": `http://localhost:3000/api/pets/${id}`,
            "method": "DELETE",
        }

        if(confirm("Do you really want to delete this pet?")) {
            $.ajax(request).done(function(response) {
                alert("Pet Information Deleted Successfully.");
                location.reload();
            })
        }
    })
}