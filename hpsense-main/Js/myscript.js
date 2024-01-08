$(function () {
    // js for sidebar
    $('.navbar-toggler').on('click', function () {
        $('.sidebar').toggleClass('open-sidebar');
    })
    $('.sidebar .btn-close').on('click', function () {
        $('.sidebar').toggleClass('open-sidebar');
    })

    $(document).on('click', 'ul.nav-pills li.nav-item', function () {
        $('.nav-link').removeClass('active')
        $(this).children('a.nav-link').addClass('active')
    })
    // js for checkbox
    $('.checkAll').change(function () {
        let status  =   $(this).is(':checked');
        $('.form-check-input').prop('checked',status);
    });
    $('.form-check-input').change(function () {
        //تعداد کل چک باکس ها
        let AllCheckboxCount=$('.form-check-input').length;
        //تعداد کل چک باکس هایی که تیک خورده اند
        let AllSelectedCheckboxCount= $('.form-check-input:checked').length;

        if (AllCheckboxCount===AllSelectedCheckboxCount) {
            $('.checkAll').prop('checked',true)
        }else{
            $('.checkAll').prop('checked',false)
        }
    });


    // js for tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


})