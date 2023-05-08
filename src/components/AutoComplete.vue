<template>
    <div class="sap-docs-container">
        <section class="sap-flex">
                <form class="fd-form-item" @submit.prevent="addOption(searchQuery)">
                    <label class="fd-form-label" :for="props.id">{{props.label}}</label>
                    <input v-model="searchQuery" class="fd-input" type="text" :id="props.id" :placeholder="props.placeholder">
                </form>
            <div>
                <nav v-if="searchQuery && filteredOptions.length" class="fd-menu">
                    <ul class="fd-menu__list">
                        <li v-for="option in filteredOptions" @click="selectOption(option)" class="fd-list__item">
                           {{option.name}}
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
        <div>
            <label>Selected Items:</label>
            <ul>
                <li v-for="item in selectedItems">
                    {{ item.name }} <button @click="removeItem(item)">x</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AutoCompleteInput'
}
</script>

<script setup>
import {ref, computed, watch } from "vue";

    /** Variables */
    const props = defineProps(['label' , 'data' , 'placeholder' , 'id']);
    const searchQuery = ref('');
    const selectedItems = ref([]);

    /** Functions */
    const filteredOptions = computed(() => {
        return props.data.filter(option =>
            option.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });

    const selectOption = option => {
        if (!selectedItems.value.includes(option)) {
            selectedItems.value.push(option);
        }
        searchQuery.value = '';
    };

    const addOption = (text) =>{
        if (!selectedItems.value.includes(text)) {
            selectedItems.value.push({id:Math.floor(Math.random() * 9999) + 1 , name:text});
        }
        searchQuery.value = '';
    }

    const removeItem = item => {
        const index = selectedItems.value.indexOf(item);
        if (index !== -1) {
            selectedItems.value.splice(index, 1);
        }
    };

    watch(selectedItems, () => {
        searchQuery.value = '';
    });

</script>

<style scoped>
.sap-docs-container section{
    min-height: 8rem;
    padding: 1rem;
}

.sap-docs-container .fd-form-item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.filtered-data{
    list-style: none;
}

.filtered-data li {
    padding: 0.5rem 0;
}
</style>
