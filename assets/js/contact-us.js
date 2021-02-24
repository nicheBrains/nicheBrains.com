$(function () {
    function e(e) {
        "success" == e.result ? ($("form#reused_form").addClass("d-none"), $("#success_message").removeClass("d-none"), $("#error_message").addClass("d-none")) : ($("#error_message").html("<h6>Error</h6> Sorry there was an error sending your email."), console.log(e.result), $("#success_message").addClass("d-none"), $("#error_message").removeClass("d-none"), $('button[type="button"]', $form).each(function () {
            $btn = $(this), label = $btn.prop("orig_label"), label && ($btn.prop("type", "submit"), $btn.text(label), $btn.prop("orig_label", ""))
        }))
    }

    function r(e, r) {
        var t = "";
        t = 0 === e.status ? "Not connect.\n Verify Network." : 404 == e.status ? "Requested page not found. [404]" : 500 == e.status ? "Internal Server Error [500]." : "parsererror" === r ? "Requested JSON parse failed." : "timeout" === r ? "Time out error." : "abort" === r ? "Ajax request aborted." : "Uncaught Error.\n" + e.responseText, $("#error_message").html("<h6>Error</h6> Sorry there was an error sending your email. <br/>"), console.log(t), $("#success_message").addClass("d-none"), $("#error_message").removeClass("d-none"), $('button[type="button"]', $form).each(function () {
            $btn = $(this), label = $btn.prop("orig_label"), label && ($btn.prop("type", "submit"), $btn.text(label), $btn.prop("orig_label", ""))
        })
    }
    $("#reused_form").submit(function (t) {
        t.preventDefault(), $form = $(this), $('button[type="submit"]', $form).each(function () {
            $btn = $(this), $btn.prop("type", "button"), $btn.prop("orig_label", $btn.text()), $btn.text("Sending ...")
        }), console.log($form.serialize()), $.ajax({
            type: "POST",
            url: "https://mailer.nichebrains.com/mailer.php",
            data: $form.serialize(),
            success: e,
            error: r,
            dataType: "json"
        })
    })
});