<template>
  <div class="flex flex-col h-screen">
    <Header />
    <Background
      class="lg:pl-[180px] md:pl-[100px] h-[calc(100vh-theme(spacing.header))]"
    >
      <slot></slot>
    </Background>
  </div>
</template>

<script setup lang="ts">
import Header from "../atoms/Header.vue";
import Background from "../atoms/Background.vue";
</script>
