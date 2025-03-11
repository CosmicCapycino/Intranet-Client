<template>
    <div id="nav-bar">
        <ul id="nav-links">
            <li class="link">
                <RouterLink to="home" class="link">
                    <v-icon icon="mdi-home"></v-icon>
                    <p>Home</p>
                </RouterLink>
            </li>
            <li class="link">
                <RouterLink to="social" class="link">
                    <v-icon icon="mdi-newspaper-variant"></v-icon>
                    <p>Social</p>
                </RouterLink>
            </li>
            <li class="link">
                <RouterLink to="contacts" class="link">
                    <v-icon icon="mdi-contacts"></v-icon>
                    <p>Contacts</p>                    
                </RouterLink>
            </li>
            <li class="link">
                <v-icon icon="mdi-calendar"></v-icon>
                <p>Calendar</p>
            </li>
            <li class="link">
                <v-icon icon="mdi-sofa"></v-icon>
                <p>Rooms</p>
            </li>
            <li class="link">
                <v-icon icon="mdi-tent"></v-icon>
                <p>Holidays</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
#nav-bar {
    background-color: #333333;
    height: 100%;
    color: #FFFFFF;
    text-align: left;
    padding: 20px;
    justify-items: center;
}

.link {
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    width: 100% !important;
    margin: 10px 0;
}

.link p {
    margin-left: 10px;
}

.link a {
    text-decoration: none;
    color: #FFFFFF;
}
</style>

<script>
export default {
    name: "NavBar"
}
</script>