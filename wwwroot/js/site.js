$(function () {
    $(document).on("click", "form[data-id]", function (e) {
        e.preventDefault();
        var id = $(this).closest("td").find("input").val();
    })

    /*var settings = {
        "url": "api/products/PutProduct/id",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({                        //Взять из формы редактирования
            "Name": "Name2",
            "Price": 200,
            "Description": "Description-Description"
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });*/

    $.ajax(
        {
            url: "api/products/GetProduct",
            type: "get",
            success: function (r) {
                $("#out-table").html($("#view-all").render({ Response: r }));
                console.table(r);
            }
        })
})