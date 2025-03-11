<template>
    <v-container id="contacts">
        <h1>Contacts</h1>
        <v-data-table :headers="table.headers" :items="table.data" :loading="table.loading">
            <template v-slot:loading>
                <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
            </template>
            <template v-slot:[`item.actions`]="{item}">
                <v-btn @click="viewContact(item)">View</v-btn>
            </template>
        </v-data-table>
        <v-dialog v-model="viewCard.show" max-width="500">
            <v-card :title="`View - ${this.viewCard.viewedContact.forename} ${this.viewCard.viewedContact.surname}`">
                <v-card-text>
                    <div class="entry">
                        <p>Job Title: {{ this.viewCard.viewedContact.jobTitle }}</p>
                    </div>
                    <div class="entry">
                        <p>Department: {{ this.viewCard.viewedContact.department }}</p>
                    </div>
                    <div class="entry">
                        <p>Email: <a :href="'mailto:' + this.viewCard.viewedContact.email">{{ this.viewCard.viewedContact.email }}</a></p>
                    </div>
                    <div class="entry">
                        <p>Phone Number: {{ this.viewCard.viewedContact.phoneNumber }}</p>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "ContactsView",
    data() {
        return {
            table:{
                headers: [
                    {title: "Forename", key: "forename", align: "center"},
                    {title: "Surname", key: "surname", align: "center"},
                    {title: "Department", key: "department", align: "center"},
                    {title: "Job Title", key: "jobTitle", align: "center"},
                    {title: "Email", key: "email", align: "center"},
                    {title: "Phone Number", key: "phoneNumber", align: "center"},
                    {title: "Actions", key: "actions", align: "center"}
                ],
                data: ref(),
                loading: ref(true)
            },
            viewCard: {
                show: false,
                viewedContact: null
            }
        }
    },
    async mounted() {
        this.table.data = await this.$apiService.contacts.fetchAll();
        this.table.loading = false;
    },
    methods: {
        viewContact(contact) {
            this.viewCard.viewedContact = contact
            this.viewCard.show = true;
        }
    }
}
</script>

<style scoped>
#contacts {
    justify-items: left;
}
</style>