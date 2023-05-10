<template>
    <header>
        <nav>
            <RouterLink :to="{ name: 'Dashboard' }">
                {{ $t('Dashboard') }}
            </RouterLink>
            |
            <RouterLink :to="{ name: 'Login' }">
                {{ $t('Login') }}
            </RouterLink>
        </nav>
    </header>

    <main>
        <h1>{{ $t('Login') }}</h1>
        <AutoCompleteInput label="search name" placeholder="search in names ..." id="search name" :data="names"/>
    </main>
</template>
<script setup>
import AutoCompleteInput from "./../components/AutoComplete.vue";

    const names = [
        {name:"mahdi" , id:Math.floor(Math.random() * 999)+1},
        {name:"reza" , id:Math.floor(Math.random() * 999)+1},
        {name:"ali" , id:Math.floor(Math.random() * 999)+1},
        {name:"mohammad" , id:Math.floor(Math.random() * 999)+1}
    ]


</script>
