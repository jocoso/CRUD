$("#add_pet").submit(function(event) {
    alert("Data Inserted Successfully!");
});

$("#update_pet").submit(function(event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    $.map(unindexed_array, function(n, i) {
        data[n['name']] = n['value'];
    });

    console.log(data);

    var requests = {
        "url": `http://localhost:3000/api/pets/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(requests).done(function(response) {
        alert("Pet Information Updated Successfully.");
    })
})