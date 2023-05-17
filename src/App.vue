<template>
    <RouterView />
    <AutoCompleteInput  :data="data" bind-value="title" v-model="value"/>
<!--    <AutoCompleteInput  :data="data1"  v-model="value"/>-->
</template>
<script setup>
import AutoCompleteInput from "./components/AutoComplete.vue";
import {ref} from "vue";
const value= ref([]);
const data = [{id:1 , title:"mahdi"} , {id:2 , title:"reza"} , {id:3 , title:"ali"} , {id:4 , title:"majid"}];
</script>
