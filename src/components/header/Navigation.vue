<template>
  <nav
    class="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between"
    :class="{ hidden: !isOpen, block: isOpen }"
  >
    <search />
    <div class="sm:flex sm:items-center">
      <div class="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0">
        <a href="#" class="nav-link">List your property</a>
        <a href="#" class="nav-link">Trips</a>
        <a href="#" class="nav-link">Messages</a>
      </div>
      <div class="relative px-5 py-5 sm:py-0 sm:ml-4 sm:px-0">
        <div class="flex items-center sm:hidden">
          <img
            class="h-10 w-10 object-cover rounded-full border-2 border-gray-600"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
            alt=""
          />
          <span class="ml-4 font-semibold text-gray-200 sm:hidden">Isla Schoger</span>
        </div>
        <div class="mt-5 sm:hidden">
          <a href="#account" class="profile-link">Account settings</a>
          <a href="#support" class="mt-3 profile-link">Support</a>
          <a href="#sign-out" class="mt-3 profile-link">Sign out</a>
        </div>
        <Dropdown class="hidden sm:block">
          <template #trigger="{ hasFocus, isOpen }">
            <span
              class="block h-8 w-8 overflow-hidden rounded-full border-2"
              :class="[
                hasFocus || isOpen
                  ? 'border-white xl:border-indigo-500'
                  : 'border-gray-600 xl:border-gray-300',
              ]"
            >
              <img
                class="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                alt=""
              />
            </span>
          </template>
          <template #dropdown>
            <div class="mt-3 bg-white xl:border rounded-lg w-48 py-2 shadow-xl">
              <a href="#account" class="dropdown-link">Account settings</a>
              <a href="#support" class="mt-0 dropdown-link">Support</a>
              <a href="#sign-out" class="mt-0 dropdown-link">Sign out</a>
            </div>
          </template>
        </Dropdown>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Search from './Search.vue';
import Dropdown from '../shared/Dropdown.vue';

export default {
  components: { Search, Dropdown },
  props: {
    isOpen: Boolean,
  },
  setup(props) {},
};
</script>

<style></style>