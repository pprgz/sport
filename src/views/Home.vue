<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <p>{{header}}</p>
      </el-header>
      <el-main><span>{{bb}}</span>
        <p>{{value}}</p>
      </el-main>
      <el-footer>
        <router-link to="/movie/1">Go to Movie</router-link>
      </el-footer>
    </el-container>
  </div>
</template>
<script  lang="ts" setup>
const header="ww";
const bb="the";
const value=1;
</script>

<style>
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>