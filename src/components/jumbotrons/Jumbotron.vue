<script>
export default {
  props: {
    id: String
  }
}
</script>

<template>
    <header :id="id" class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row">
                <slot name="content"></slot>
            </div>
        </div>
    </header>
</template>

<style scoped>
.jumbotron {
    padding-top: 10.5rem;
    padding-bottom: 6rem;
    color: #fff;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
}
</style>