!function () {
    var view = document.querySelector('#topNavBar')

    var controller = {
        view: null,
        init: function(view){
            this.view = view
            this.bindEvents()
            //  this.bindEvents.call(this)
        },
        bindEvents: function(){
            var view = this.view
            window.addEventListener('scroll',  (x) => {
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
            //箭头函数没有 this
        },
        active: function(){
            this.view.classList.add('sticky')
            
        },
        deactive: function(){
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)


    // var controller = function(){
    //     window.addEventListener('scroll', function (x) {
    //         if (window.scrollY > 0) {
    //             view.classList.add('sticky')
    //         } else {
    //             view.classList.remove('sticky')
    //         }
    //     })
    // }

    // controller(view)

}.call()