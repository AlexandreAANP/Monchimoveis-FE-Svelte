
<script>
    import FacebookIcon from "./FacebookIcon.svelte";
    import InstagramIcon from "./InstagramIcon.svelte";

    let instagramUrl = "https://www.instagram.com/josegilvarela/";
    let facebookUrl = "https://www.facebook.com/profile.php?id=61551917374580&locale=pt_PT";

</script>
<style>
#footer {
    background-color: #333;
    padding: 50px 0 20px 0;
}

.socialMedia {
    margin-bottom: 50px;
}

#footer li {
    display: inline-block;
    margin: 0 10px;
}

#footer a {
    color: white;
    cursor: pointer;
}

#footer p {
    font-size: 15px;
    margin: 0 0 10px;
    color: #777;
    text-align: center;
}

#footer b {
    color: #777;
}

</style>

<div id="footer" class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center max-w-[1170px]">
        <div class="socialMedia">
            <ul>
                <li>
                    <a class="footerIcon" href={facebookUrl} target="_blank"><FacebookIcon /></a>
                </li>
                <li>
                    <a class="footerIcon" href={instagramUrl} target="_blank"><InstagramIcon /></a>
                </li>
            </ul>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center max-w-[1170px]">
        <div>
            <p>© 2025 <a href="https://github.com/AlexandreAANP" target="_blank"><b>Alexandre Pita</b></a>. <br>All rights reserved.</p>
        </div>
    </div>
</div>