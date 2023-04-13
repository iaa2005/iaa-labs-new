$(document).ready(async function () {
    $("header").append(`
        <div class="header-menu">
            <a class="logo-href" href="/">
                <svg class="logo-img" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 802.7 173.2">
                    <path d="M476.4,5.2V168c0,2.9-2.3,5.2-5.2,5.2l0,0h-61.8c-2.9,0-5.2-2.3-5.2-5.2l0,0V91.8c0-2.9-2.3-5.2-5.2-5.2l0,0
                        h-18.5c-2.9,0-5.2,2.3-5.2,5.2l0,0V168c0,2.9-2.3,5.2-5.2,5.2l0,0h-61.8c-2.9,0-5.2-2.3-5.2-5.2l0,0V5.2c0-2.9,2.3-5.2,5.2-5.2l0,0
                        h162.8C474.1,0,476.4,2.3,476.4,5.2L476.4,5.2z M101.1,5.2V168c0,2.9,2.3,5.2,5.2,5.2l0,0H168c2.9,0,5.2-2.3,5.2-5.2l0,0V91.8
                        c0-2.9,2.3-5.2,5.2-5.2l0,0h18.5c2.9,0,5.2,2.3,5.2,5.2l0,0V168c0,2.9,2.3,5.2,5.2,5.2l0,0h61.8c2.9,0,5.2-2.3,5.2-5.2l0,0V5.2
                        c0-2.9-2.3-5.2-5.2-5.2l0,0H106.3C103.4,0,101.1,2.3,101.1,5.2z M68.7,0H3.5C1.6,0,0,1.6,0,3.5v166.3c0,1.9,1.6,3.5,3.5,3.5h65.2
                        c1.9,0,3.5-1.6,3.5-3.5l0,0V3.5C72.2,1.6,70.6,0,68.7,0L68.7,0L68.7,0z M601.1,116.1l-1.6,17h-50.3v-95h19.1v78
                        C568.3,116.1,601.1,116.1,601.1,116.1z M670.6,133h-17.3v-7.2c-2.4,3.3-5.1,5.7-7.9,7.1c-2.8,1.4-6.1,2.2-9.9,2.2
                        c-7.9,0-14.5-2.8-19.8-8.5s-7.9-12.8-7.9-21.3s2.7-15.6,8.2-21.1s12.3-8.4,20.5-8.4c3.3,0,6.2,0.6,8.8,1.8c2.5,1.2,5.2,3.4,8.1,6.4
                        v-6.9h17.3L670.6,133L670.6,133z M653.5,111.5V99.8c-1-2.8-2.8-5.1-5.3-6.8c-2.5-1.7-5.3-2.6-8.5-2.6c-4.2,0-7.6,1.4-10.3,4.2
                        c-2.7,2.8-4,6.4-4,10.8c0,4.5,1.3,8.2,4,11c2.7,2.9,6,4.3,10.1,4.3c3.1,0,5.9-0.8,8.4-2.5C650.5,116.6,652.3,114.4,653.5,111.5z
                         M747.8,105.4c0,8.4-2.6,15.4-7.9,21.1c-5.3,5.7-11.8,8.6-19.5,8.6c-3.8,0-7.1-0.7-10-2.2s-5.7-4-8.6-7.4v7.5h-17.3V38h17.3v46.1
                        c2.7-3,5.4-5.2,8.2-6.6s6-2.1,9.4-2.1c8.1,0,14.8,2.9,20.2,8.6C745.1,89.9,747.8,97,747.8,105.4z M730.2,105.4c0-4.4-1.4-8-4.1-10.9
                        c-2.7-2.9-6.1-4.4-10.1-4.4c-3.4,0-6.3,0.9-8.8,2.7c-2.5,1.8-4.4,4.3-5.5,7.6v10c1.2,3.3,3,5.8,5.4,7.5c2.4,1.8,5.3,2.7,8.6,2.7
                        c4,0,7.5-1.4,10.3-4.3C728.8,113.5,730.2,109.9,730.2,105.4z M802.7,118c0,4.9-1.9,9-5.7,12.1s-9,4.7-15.5,4.7
                        c-2.8,0-5.4-0.2-7.8-0.6c-2.4-0.4-4.9-1-7.3-1.9c-1.5-0.6-3-1.3-4.6-2.1c-1.5-0.8-3.2-1.7-4.9-2.8l6.1-12c2.7,1.9,5.5,3.5,8.4,4.6
                        s5.5,1.7,7.9,1.7c2.1,0,3.7-0.3,4.7-1s1.5-1.7,1.5-3.1s-0.5-2.6-1.5-3.5s-3.2-2.1-6.6-3.7l-1.6-0.7c-4.5-2-7.6-3.5-9.2-4.5
                        c-1.6-1-3.1-2.2-4.6-3.6c-1.2-1.2-2.1-2.6-2.7-4.2c-0.6-1.6-0.9-3.4-0.9-5.5c0-5.3,2-9.4,5.9-12.5c4-3.1,9.4-4.6,16.2-4.6
                        c3.7,0,7.1,0.4,10.2,1.2c3.1,0.8,6.5,2.1,10.2,4l-5.7,12.9c-2.4-1.6-4.8-2.8-7.3-3.6c-2.4-0.8-4.8-1.3-7.1-1.3c-1.8,0-3.1,0.3-4,1
                        c-0.9,0.6-1.4,1.5-1.4,2.7c0,1,0.5,1.9,1.4,2.8c0.9,0.8,2.5,1.8,4.7,2.8l1.6,0.7c7.8,3.6,13,6.8,15.6,9.6
                        C801.4,110.4,802.7,113.9,802.7,118z" />
                </svg>
            </a>
            <a class="menu-text" href="/research">Исследования</a>
            <a class="menu-text" href="/astronomy">Астрономия</a>
            <a class="menu-text" href="/physics">Физика</a>
            <a class="menu-text" href="/about">Компания</a>
            <button class="menu-btn" id="menu-btn-open">Меню</button>
        </div>
        <div class="header-in-2">
            <a href="https://twitter.com/iaa2005">
                <svg class="img-social" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48">
                    <path d="M46.5,10c-1.7,0.7-3.4,1.3-5.2,1.5c1.9-1.1,3.4-3,4.1-5.1c-1.9,1.1-3.7,1.9-5.8,2.3c-1.9-1.9-4.3-3-6.9-3
		c-5.1,0-9.2,4.1-9.2,9.2c0,0.8,0,1.5,0.2,2.1C15.9,16.6,9.2,13,4.7,7.4c-0.9,1.3-1.3,3-1.3,4.7c0,3.2,1.7,6,4.1,7.7
		c-1.5-0.2-3-0.6-4.1-1.1c0,0,0,0,0,0.2c0,4.5,3.2,8.2,7.3,9c-0.7,0.2-1.5,0.4-2.4,0.4c-0.6,0-1.1,0-1.7-0.2
		c1.1,3.7,4.5,6.4,8.6,6.4c-3.2,2.4-7.1,3.9-11.4,3.9c-0.7,0-1.5,0-2.2-0.2c4.1,2.6,9,4.1,14.1,4.1c17.1,0,26.2-14.1,26.2-26.2
		c0-0.4,0-0.7,0-1.1C43.7,13.6,45.2,11.9,46.5,10" />
                </svg>
            </a>
            <a href="https://t.me/iaa2005">
                <svg class="img-social" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 96 96">
                    <path d="M11.7,47.2c25.1-11.1,57.7-24.5,62.2-26.4c11.8-4.9,15.4-3.9,13.6,6.9c-1.3,7.8-5,33.5-8,49.5
		c-1.8,9.5-5.7,10.6-12,6.5c-3-2-18.1-12-21.4-14.3c-3-2.1-7.1-4.7-1.9-9.8c1.8-1.8,13.9-13.3,23.3-22.3c1.2-1.2-0.3-3.1-1.7-2.2
		C53,43.5,35.4,55.2,33.2,56.8c-3.4,2.3-6.6,3.4-12.5,1.7c-4.4-1.3-8.7-2.8-10.4-3.4C3.9,52.9,5.4,50,11.7,47.2z" />
                </svg>
            </a>
            <a href="https://github.com/iaa2005">
                <svg class="img-social" version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 90 90">
                    <path d="M45,9C25.1,9,9,25.1,9,45c0,16.9,11.6,31,27.3,34.9c-0.2-0.5-0.3-1.1-0.3-1.8V72c-1.5,0-3.9,0-4.5,0
		c-2.5,0-4.7-1.1-5.7-3c-1.2-2.2-1.4-5.5-4.3-7.6c-0.9-0.7-0.2-1.5,0.8-1.4c1.8,0.5,3.4,1.8,4.8,3.7c1.4,1.9,2.1,2.3,4.8,2.3
		c1.3,0,3.2-0.1,5.1-0.4c1-2.5,2.7-4.8,4.8-5.9C29.7,58.5,24,52.6,24,44.5c0-3.5,1.5-6.9,4-9.7c-0.8-2.8-1.9-8.6,0.3-10.8
		c5.4,0,8.7,3.5,9.4,4.4c2.7-0.9,5.6-1.4,8.7-1.4c3.1,0,6.1,0.5,8.8,1.4c0.8-0.9,4-4.4,9.4-4.4c2.2,2.2,1.1,8,0.3,10.8
		c2.5,2.8,4,6.2,4,9.7c0,8.1-5.7,14.1-17.7,15.3c3.3,1.7,5.7,6.6,5.7,10.2v8.2c0,0.3-0.1,0.5-0.1,0.8C70.9,74,81,60.7,81,45
		C81,25.1,64.9,9,45,9z" />
                </svg>
            </a>
        </div>
    `)

    $("body").append(`
        <footer>
            <div class="website-map">
                <a class="logo-footer-href" href="https://iaa2005.tk">
                    <svg class="logo-footer" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 802.7 173.2">
                        <path d="M476.4,5.2V168c0,2.9-2.3,5.2-5.2,5.2l0,0h-61.8c-2.9,0-5.2-2.3-5.2-5.2l0,0V91.8c0-2.9-2.3-5.2-5.2-5.2l0,0
                        h-18.5c-2.9,0-5.2,2.3-5.2,5.2l0,0V168c0,2.9-2.3,5.2-5.2,5.2l0,0h-61.8c-2.9,0-5.2-2.3-5.2-5.2l0,0V5.2c0-2.9,2.3-5.2,5.2-5.2l0,0
                        h162.8C474.1,0,476.4,2.3,476.4,5.2L476.4,5.2z M101.1,5.2V168c0,2.9,2.3,5.2,5.2,5.2l0,0H168c2.9,0,5.2-2.3,5.2-5.2l0,0V91.8
                        c0-2.9,2.3-5.2,5.2-5.2l0,0h18.5c2.9,0,5.2,2.3,5.2,5.2l0,0V168c0,2.9,2.3,5.2,5.2,5.2l0,0h61.8c2.9,0,5.2-2.3,5.2-5.2l0,0V5.2
                        c0-2.9-2.3-5.2-5.2-5.2l0,0H106.3C103.4,0,101.1,2.3,101.1,5.2z M68.7,0H3.5C1.6,0,0,1.6,0,3.5v166.3c0,1.9,1.6,3.5,3.5,3.5h65.2
                        c1.9,0,3.5-1.6,3.5-3.5l0,0V3.5C72.2,1.6,70.6,0,68.7,0L68.7,0L68.7,0z M601.1,116.1l-1.6,17h-50.3v-95h19.1v78
                        C568.3,116.1,601.1,116.1,601.1,116.1z M670.6,133h-17.3v-7.2c-2.4,3.3-5.1,5.7-7.9,7.1c-2.8,1.4-6.1,2.2-9.9,2.2
                        c-7.9,0-14.5-2.8-19.8-8.5s-7.9-12.8-7.9-21.3s2.7-15.6,8.2-21.1s12.3-8.4,20.5-8.4c3.3,0,6.2,0.6,8.8,1.8c2.5,1.2,5.2,3.4,8.1,6.4
                        v-6.9h17.3L670.6,133L670.6,133z M653.5,111.5V99.8c-1-2.8-2.8-5.1-5.3-6.8c-2.5-1.7-5.3-2.6-8.5-2.6c-4.2,0-7.6,1.4-10.3,4.2
                        c-2.7,2.8-4,6.4-4,10.8c0,4.5,1.3,8.2,4,11c2.7,2.9,6,4.3,10.1,4.3c3.1,0,5.9-0.8,8.4-2.5C650.5,116.6,652.3,114.4,653.5,111.5z
                        M747.8,105.4c0,8.4-2.6,15.4-7.9,21.1c-5.3,5.7-11.8,8.6-19.5,8.6c-3.8,0-7.1-0.7-10-2.2s-5.7-4-8.6-7.4v7.5h-17.3V38h17.3v46.1
                        c2.7-3,5.4-5.2,8.2-6.6s6-2.1,9.4-2.1c8.1,0,14.8,2.9,20.2,8.6C745.1,89.9,747.8,97,747.8,105.4z M730.2,105.4c0-4.4-1.4-8-4.1-10.9
                        c-2.7-2.9-6.1-4.4-10.1-4.4c-3.4,0-6.3,0.9-8.8,2.7c-2.5,1.8-4.4,4.3-5.5,7.6v10c1.2,3.3,3,5.8,5.4,7.5c2.4,1.8,5.3,2.7,8.6,2.7
                        c4,0,7.5-1.4,10.3-4.3C728.8,113.5,730.2,109.9,730.2,105.4z M802.7,118c0,4.9-1.9,9-5.7,12.1s-9,4.7-15.5,4.7
                        c-2.8,0-5.4-0.2-7.8-0.6c-2.4-0.4-4.9-1-7.3-1.9c-1.5-0.6-3-1.3-4.6-2.1c-1.5-0.8-3.2-1.7-4.9-2.8l6.1-12c2.7,1.9,5.5,3.5,8.4,4.6
                        s5.5,1.7,7.9,1.7c2.1,0,3.7-0.3,4.7-1s1.5-1.7,1.5-3.1s-0.5-2.6-1.5-3.5s-3.2-2.1-6.6-3.7l-1.6-0.7c-4.5-2-7.6-3.5-9.2-4.5
                        c-1.6-1-3.1-2.2-4.6-3.6c-1.2-1.2-2.1-2.6-2.7-4.2c-0.6-1.6-0.9-3.4-0.9-5.5c0-5.3,2-9.4,5.9-12.5c4-3.1,9.4-4.6,16.2-4.6
                        c3.7,0,7.1,0.4,10.2,1.2c3.1,0.8,6.5,2.1,10.2,4l-5.7,12.9c-2.4-1.6-4.8-2.8-7.3-3.6c-2.4-0.8-4.8-1.3-7.1-1.3c-1.8,0-3.1,0.3-4,1
                        c-0.9,0.6-1.4,1.5-1.4,2.7c0,1,0.5,1.9,1.4,2.8c0.9,0.8,2.5,1.8,4.7,2.8l1.6,0.7c7.8,3.6,13,6.8,15.6,9.6
                        C801.4,110.4,802.7,113.9,802.7,118z" />
                    </svg>
                </a>
                <div class="map-menu-out">
                    <div class="map-menu">
                        <a href="/research"><span>Исследования</span></a>
                        <a href="/research#datascience">Data Science</a>
                        <a href="/research#projects">Проекты</a>
                        <a href="/research#articles">Статьи</a>
                    </div>
                    <div class="map-menu">
                        <a href="/astronomy"><span>Астрономия</span></a>
                        <a href="/research#articles">Статьи</a>
                        <a href="/research#problems">Задачи</a>
                        <a href="/research#international">Межнар</a>
                    </div>
                    <div class="map-menu">
                        <a href="/physics"><span>Физика</span></a>
                        <a href="/physics#articles">Статьи</a>
                        <a href="/physics#problems">Задачи</a>
                        <a href="/physics#international">Межнар</a>
                    </div>
                    <div class="map-menu">
                        <a href="/about"><span>Компания</span></a>
                        <a href="/charter">Устав компании</a>
                    </div>
                </div>
            </div>
            <div class="rule"></div>
            <div class="footer-info">
                <div class="docs-and-title">
                    <h1>IAA Labs © 2022–2023</h1>
                    <a href="/terms">Условия использования</a>
                    <a href="/privacy-policy">Политика конфиденциальности</a>
                </div>
                <div class="socials-links">
                    <a href="https://twitter.com/iaa2005">Twitter</a>
                    <a href="https://t.me/iaa2005">Telegram</a>
                    <a href="https://github.com/iaa2005">GitHub</a>
                </div>
            </div>
        </footer>

        <div class="lines" aria-hidden="true">
            <div>
                <div class="bg-primary" style="margin-top:0px;height:23px"></div>
                <div class="bg-primary" style="margin-top:1px;height:22px"></div>
                <div class="bg-primary" style="margin-top:2px;height:21px"></div>
                <div class="bg-primary" style="margin-top:3px;height:20px"></div>
                <div class="bg-primary" style="margin-top:4px;height:19px"></div>
                <div class="bg-primary" style="margin-top:5px;height:18px"></div>
                <div class="bg-primary" style="margin-top:6px;height:17px"></div>
                <div class="bg-primary" style="margin-top:7px;height:16px"></div>
                <div class="bg-primary" style="margin-top:8px;height:15px"></div>
                <div class="bg-primary" style="margin-top:9px;height:14px"></div>
                <div class="bg-primary" style="margin-top:10px;height:13px"></div>
                <div class="bg-primary" style="margin-top:11px;height:12px"></div>
                <div class="bg-primary" style="margin-top:12px;height:11px"></div>
                <div class="bg-primary" style="margin-top:13px;height:10px"></div>
                <div class="bg-primary" style="margin-top:14px;height:9px"></div>
                <div class="bg-primary" style="margin-top:15px;height:8px"></div>
                <div class="bg-primary" style="margin-top:16px;height:7px"></div>
                <div class="bg-primary" style="margin-top:17px;height:6px"></div>
                <div class="bg-primary" style="margin-top:18px;height:5px"></div>
                <div class="bg-primary" style="margin-top:19px;height:4px"></div>
                <div class="bg-primary" style="margin-top:20px;height:3px"></div>
                <div class="bg-primary" style="margin-top:21px;height:2px"></div>
                <div class="bg-primary" style="margin-top:22px;height:1px"></div>
                <div class="bg-primary" style="margin-top:23px;height:0px"></div>
                <div class="bg-primary-2"></div>
            </div>
        </div>

        <div class="mobile-menu">
            <div class="logo-href-and-logo">
                <a class="logo-href" href="/">
                    <svg class="logo-img" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 802.7 173.2">
                        <path d="M476.4,5.2V168c0,2.9-2.3,5.2-5.2,5.2l0,0h-61.8c-2.9,0-5.2-2.3-5.2-5.2l0,0V91.8c0-2.9-2.3-5.2-5.2-5.2l0,0
                            h-18.5c-2.9,0-5.2,2.3-5.2,5.2l0,0V168c0,2.9-2.3,5.2-5.2,5.2l0,0h-61.8c-2.9,0-5.2-2.3-5.2-5.2l0,0V5.2c0-2.9,2.3-5.2,5.2-5.2l0,0
                            h162.8C474.1,0,476.4,2.3,476.4,5.2L476.4,5.2z M101.1,5.2V168c0,2.9,2.3,5.2,5.2,5.2l0,0H168c2.9,0,5.2-2.3,5.2-5.2l0,0V91.8
                            c0-2.9,2.3-5.2,5.2-5.2l0,0h18.5c2.9,0,5.2,2.3,5.2,5.2l0,0V168c0,2.9,2.3,5.2,5.2,5.2l0,0h61.8c2.9,0,5.2-2.3,5.2-5.2l0,0V5.2
                            c0-2.9-2.3-5.2-5.2-5.2l0,0H106.3C103.4,0,101.1,2.3,101.1,5.2z M68.7,0H3.5C1.6,0,0,1.6,0,3.5v166.3c0,1.9,1.6,3.5,3.5,3.5h65.2
                            c1.9,0,3.5-1.6,3.5-3.5l0,0V3.5C72.2,1.6,70.6,0,68.7,0L68.7,0L68.7,0z M601.1,116.1l-1.6,17h-50.3v-95h19.1v78
                            C568.3,116.1,601.1,116.1,601.1,116.1z M670.6,133h-17.3v-7.2c-2.4,3.3-5.1,5.7-7.9,7.1c-2.8,1.4-6.1,2.2-9.9,2.2
                            c-7.9,0-14.5-2.8-19.8-8.5s-7.9-12.8-7.9-21.3s2.7-15.6,8.2-21.1s12.3-8.4,20.5-8.4c3.3,0,6.2,0.6,8.8,1.8c2.5,1.2,5.2,3.4,8.1,6.4
                            v-6.9h17.3L670.6,133L670.6,133z M653.5,111.5V99.8c-1-2.8-2.8-5.1-5.3-6.8c-2.5-1.7-5.3-2.6-8.5-2.6c-4.2,0-7.6,1.4-10.3,4.2
                            c-2.7,2.8-4,6.4-4,10.8c0,4.5,1.3,8.2,4,11c2.7,2.9,6,4.3,10.1,4.3c3.1,0,5.9-0.8,8.4-2.5C650.5,116.6,652.3,114.4,653.5,111.5z
                            M747.8,105.4c0,8.4-2.6,15.4-7.9,21.1c-5.3,5.7-11.8,8.6-19.5,8.6c-3.8,0-7.1-0.7-10-2.2s-5.7-4-8.6-7.4v7.5h-17.3V38h17.3v46.1
                            c2.7-3,5.4-5.2,8.2-6.6s6-2.1,9.4-2.1c8.1,0,14.8,2.9,20.2,8.6C745.1,89.9,747.8,97,747.8,105.4z M730.2,105.4c0-4.4-1.4-8-4.1-10.9
                            c-2.7-2.9-6.1-4.4-10.1-4.4c-3.4,0-6.3,0.9-8.8,2.7c-2.5,1.8-4.4,4.3-5.5,7.6v10c1.2,3.3,3,5.8,5.4,7.5c2.4,1.8,5.3,2.7,8.6,2.7
                            c4,0,7.5-1.4,10.3-4.3C728.8,113.5,730.2,109.9,730.2,105.4z M802.7,118c0,4.9-1.9,9-5.7,12.1s-9,4.7-15.5,4.7
                            c-2.8,0-5.4-0.2-7.8-0.6c-2.4-0.4-4.9-1-7.3-1.9c-1.5-0.6-3-1.3-4.6-2.1c-1.5-0.8-3.2-1.7-4.9-2.8l6.1-12c2.7,1.9,5.5,3.5,8.4,4.6
                            s5.5,1.7,7.9,1.7c2.1,0,3.7-0.3,4.7-1s1.5-1.7,1.5-3.1s-0.5-2.6-1.5-3.5s-3.2-2.1-6.6-3.7l-1.6-0.7c-4.5-2-7.6-3.5-9.2-4.5
                            c-1.6-1-3.1-2.2-4.6-3.6c-1.2-1.2-2.1-2.6-2.7-4.2c-0.6-1.6-0.9-3.4-0.9-5.5c0-5.3,2-9.4,5.9-12.5c4-3.1,9.4-4.6,16.2-4.6
                            c3.7,0,7.1,0.4,10.2,1.2c3.1,0.8,6.5,2.1,10.2,4l-5.7,12.9c-2.4-1.6-4.8-2.8-7.3-3.6c-2.4-0.8-4.8-1.3-7.1-1.3c-1.8,0-3.1,0.3-4,1
                            c-0.9,0.6-1.4,1.5-1.4,2.7c0,1,0.5,1.9,1.4,2.8c0.9,0.8,2.5,1.8,4.7,2.8l1.6,0.7c7.8,3.6,13,6.8,15.6,9.6
                            C801.4,110.4,802.7,113.9,802.7,118z" />
                    </svg>
                </a>
                <button class="menu-btn" id="menu-btn-close">Закрыть</button>
            </div>
            <a class="menu-text" href="/research">Исследования</a>
            <a class="menu-text" href="/astronomy">Астрономия</a>
            <a class="menu-text" href="/physics">Физика</a>
            <a class="menu-text" href="/about">Компания</a>
            <div class="header-in-2">
                <a href="https://twitter.com/iaa2005">
                    <svg class="img-social" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48">
                        <path d="M46.5,10c-1.7,0.7-3.4,1.3-5.2,1.5c1.9-1.1,3.4-3,4.1-5.1c-1.9,1.1-3.7,1.9-5.8,2.3c-1.9-1.9-4.3-3-6.9-3
            c-5.1,0-9.2,4.1-9.2,9.2c0,0.8,0,1.5,0.2,2.1C15.9,16.6,9.2,13,4.7,7.4c-0.9,1.3-1.3,3-1.3,4.7c0,3.2,1.7,6,4.1,7.7
            c-1.5-0.2-3-0.6-4.1-1.1c0,0,0,0,0,0.2c0,4.5,3.2,8.2,7.3,9c-0.7,0.2-1.5,0.4-2.4,0.4c-0.6,0-1.1,0-1.7-0.2
            c1.1,3.7,4.5,6.4,8.6,6.4c-3.2,2.4-7.1,3.9-11.4,3.9c-0.7,0-1.5,0-2.2-0.2c4.1,2.6,9,4.1,14.1,4.1c17.1,0,26.2-14.1,26.2-26.2
            c0-0.4,0-0.7,0-1.1C43.7,13.6,45.2,11.9,46.5,10" />
                    </svg>
                </a>
                <a href="https://t.me/iaa2005">
                    <svg class="img-social" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 96 96">
                        <path d="M11.7,47.2c25.1-11.1,57.7-24.5,62.2-26.4c11.8-4.9,15.4-3.9,13.6,6.9c-1.3,7.8-5,33.5-8,49.5
            c-1.8,9.5-5.7,10.6-12,6.5c-3-2-18.1-12-21.4-14.3c-3-2.1-7.1-4.7-1.9-9.8c1.8-1.8,13.9-13.3,23.3-22.3c1.2-1.2-0.3-3.1-1.7-2.2
            C53,43.5,35.4,55.2,33.2,56.8c-3.4,2.3-6.6,3.4-12.5,1.7c-4.4-1.3-8.7-2.8-10.4-3.4C3.9,52.9,5.4,50,11.7,47.2z" />
                    </svg>
                </a>
                <a href="https://github.com/iaa2005">
                    <svg class="img-social" version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 90 90">
                        <path d="M45,9C25.1,9,9,25.1,9,45c0,16.9,11.6,31,27.3,34.9c-0.2-0.5-0.3-1.1-0.3-1.8V72c-1.5,0-3.9,0-4.5,0
            c-2.5,0-4.7-1.1-5.7-3c-1.2-2.2-1.4-5.5-4.3-7.6c-0.9-0.7-0.2-1.5,0.8-1.4c1.8,0.5,3.4,1.8,4.8,3.7c1.4,1.9,2.1,2.3,4.8,2.3
            c1.3,0,3.2-0.1,5.1-0.4c1-2.5,2.7-4.8,4.8-5.9C29.7,58.5,24,52.6,24,44.5c0-3.5,1.5-6.9,4-9.7c-0.8-2.8-1.9-8.6,0.3-10.8
            c5.4,0,8.7,3.5,9.4,4.4c2.7-0.9,5.6-1.4,8.7-1.4c3.1,0,6.1,0.5,8.8,1.4c0.8-0.9,4-4.4,9.4-4.4c2.2,2.2,1.1,8,0.3,10.8
            c2.5,2.8,4,6.2,4,9.7c0,8.1-5.7,14.1-17.7,15.3c3.3,1.7,5.7,6.6,5.7,10.2v8.2c0,0.3-0.1,0.5-0.1,0.8C70.9,74,81,60.7,81,45
            C81,25.1,64.9,9,45,9z" />
                    </svg>
                </a>
            </div>
        </div>
    `)

    $("#menu-btn-open").on("click", function () {
        $(".mobile-menu").css("display", "flex")
    })
    
    $("#menu-btn-close").on("click", function () {
        $(".mobile-menu").css("display", "none")
    })

    $(document).on("scroll", function () {
        if ($(document).scrollTop() >= 240) {
            $(":root").css("--header-secondary", "var(--header-secondary-scroll-color)")
            $(":root").css("--header-primary", "var(--header-primary-scroll-color)")
        } else {
            $(":root").css("--header-secondary", "var(--header-secondary-top-color)")
            $(":root").css("--header-primary", "var(--header-primary-top-color)")
        }
    })

});
