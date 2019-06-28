class Effects {
    static fadeIn(element) {
        let interval = setInterval(fade, 20);
        let op = 0;
        function fade() {
            if (op >= 1) {
                clearInterval(interval);
            }
            op += 0.05;
            element.style.opacity = op;
        }
    }

    static fadeOut(element) {
        let interval = setInterval(fade, 20);
        let op = element.style.opacity;
        function fade() {
            if (op <= 0) {
                clearInterval(interval);
                element.style.display = "none";
                element.style.opacity = 1;
            }
            op -= 0.05;
            element.style.opacity = op;
        }
    }
}

///////////////////////////////////////////////
class SearchForm {
    Init() {
        this.btnSearchs = document.getElementsByClassName("search-item");
        this.formSearchs = document.getElementsByClassName("search-form");
        this.backgroundBlur = document.getElementById("background-blur");
        this.searchWrapper = document.getElementById("search");

        this.AddEvents(this.btnSearchs, this.formSearchs, this.backgroundBlur, this.searchWrapper);
    }

    AddEvents(btnSearchs, formSearchs, backgroundBlur, searchWrapper) {

        AddEventsBtnSearch();
        AddEventBackgroundBlur();

        function AddEventsBtnSearch() {
            for (let i = 0; i < btnSearchs.length; i++) {
                btnSearchs[i].addEventListener('click', function () { BtnSearchClick(formSearchs[i]) });
            }

            function BtnSearchClick(form) {
                ShowFormSearch(form);
            }

        }

        function AddEventBackgroundBlur() {
            backgroundBlur.addEventListener('click', function () {
                for (let i = 0; i < formSearchs.length; i++) {
                    HideFormSearch(formSearchs[i]);
                }
            });
        }

        function ShowFormSearch(form) {
            for (let i = 0; i < formSearchs.length; i++) {
                formSearchs[i].style.display = "none";
            }

            form.style.display = "block";
            Effects.fadeIn(form);
            backgroundBlur.style.display = "block";
            backgroundBlur.style.opacity = 0.8;
            searchWrapper.style.zIndex = 9999;
        }

        function HideFormSearch(form) {
            Effects.fadeOut(backgroundBlur);
            form.style.display = "none";
            form.style.opacity = 0;
            searchWrapper.style.zIndex = 1;
        }
    }


}

class User {
    Init() {
        this.btnUsers = document.getElementsByClassName("user-item");
        this.userForms = document.getElementsByClassName("user-form");
        this.backgroundBlur = document.getElementById("background-blur");
        this.btnCloses = document.getElementsByClassName("btn-close");
        this.AddEvents(this.btnUsers, this.userForms, this.backgroundBlur, this.btnCloses);
    }

    AddEvents(btnUsers, userForms, backgroundBlur, btnCloses) {

        AddEventBtnUser();
        AddEventBackgroundBlur();
        AddEventBtnClose();


        function AddEventBtnUser() {
            for (let i = 0; i < btnUsers.length; i++) {
                btnUsers[i].addEventListener('click', function () { BtnUserClick(userForms[i]); });
            }

            function BtnUserClick(form) {
                ShowSignInForm(form);
            }
        }

        function AddEventBackgroundBlur() {
            backgroundBlur.addEventListener('click', function () {
                for (let i = 0; i < userForms.length; i++) {
                    HideFormUser(userForms[i]);
                }
            });
        }

        function AddEventBtnClose() {
            for (let i = 0; i < btnCloses.length; i++) {
                btnCloses[i].addEventListener('click', function () {
                    HideFormUser(userForms[i]);
                });
            }
        }

        function ShowSignInForm(form) {
            form.style.display = "block";
            form.style.zIndex = 9999;
            Effects.fadeIn(form);
            backgroundBlur.style.display = "block";
            backgroundBlur.style.opacity = 0.8;
        }

        function HideFormUser(form) {
            Effects.fadeOut(backgroundBlur);
            form.style.display = "none";
            form.style.opacity = 0;
            form.style.zIndex = 1;
        }
    }
}

class TourDetails {

    Init() {
        this.titDay = document.getElementsByClassName("tit-day");
        this.contDay = document.getElementsByClassName("cont-day");

        this.stars = document.getElementById("input-stars").getElementsByTagName("i");
        this.score = document.getElementById("id-score");
        this.reviewStar = document.getElementsByClassName("review-star");

        this.btnLove = document.getElementById("btn-love");

        this.CreateStars(this.reviewStar);
        this.AddEvents(this.titDay, this.contDay, this.stars, this.score, this.btnLove);
    }

    AddEvents(titDay, contDay, inputStars, score, btnLove) {
        AddEventTitDay();
        AddEventInputStars();
        AddEventBtnLove();

        function AddEventTitDay() {
            for (let i = 0; i < titDay.length; i++) {
                titDay[i].addEventListener("click", function () { TitDayOnClick(contDay[i]); });
            }

            function TitDayOnClick(cont) {
                for (let i = 0; i < contDay.length; i++) {
                    contDay[i].style.display = "none";
                }
                cont.style.display = "block";
            }
        }

        function AddEventInputStars() {
            for (let i = 0; i < inputStars.length; i++) {
                inputStars[i].addEventListener('click', function () {
                    for (let j = 0; j < inputStars.length; j++) {
                        inputStars[j].classList.remove("yellow");
                    }

                    for (let j = 0; j <= i; j++) {
                        inputStars[j].classList.add("yellow");
                    }

                    score.value = i + 1;
                });
            }
        }

        function AddEventBtnLove() {
            const pink = "rgb(255, 0, 85)";
            btnLove.addEventListener('click', function () {
                let color = btnLove.style.color;
                if (color != pink)
                    btnLove.style.color = pink;
                else
                    btnLove.style.color = "#000";
            });
        }
    }


    CreateStars(reviewStar) {
        const star = '<i class="fas fa-star"></i>';
        const starYellow = '<i class="fas fa-star yellow"></i>'
        for (let i = 0; i < reviewStar.length; i++) {
            let count = reviewStar[i].getAttribute("aria-valuetext");

            let strHTML = "";
            for (let i = 0; i < 5; i++) {
                if (i < count)
                    strHTML += starYellow;
                else
                    strHTML += star;
            }
            reviewStar[i].innerHTML = strHTML;
        }

    }

    CreateStarsAllPage() {
        this.CreateStars(document.getElementsByClassName("review-star"));
    }

  
}

