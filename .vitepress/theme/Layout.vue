<script setup>
import DefaultTheme from 'vitepress/theme'
import StickyNoteManager from './components/StickyNoteManager.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <ClientOnly>
        <StickyNoteManager />
      </ClientOnly>
    </template>
  </Layout>
</template>
