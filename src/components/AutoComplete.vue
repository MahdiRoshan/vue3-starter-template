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
                           {{option[props.bindValue]}}
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
        <div>
            <label>Selected Items:</label>
            <ul>
                <li v-for="item in selectedItems">
                    {{ item[props.bindValue] }} <button @click="removeItem(item)">x</button>
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
import { watch } from "vue";
import useSelectData from './../composables/autoComplete.composable'

    const props = defineProps(['modelValue' , 'bindValue' , 'label' , 'data' , 'placeholder' , 'id']);

    const {
        searchQuery ,
        selectedItems,
        filteredOptions,
        selectOption,
        addOption,
        removeItem
    } = useSelectData(props.data, props.bindValue , props.modelValue);

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
