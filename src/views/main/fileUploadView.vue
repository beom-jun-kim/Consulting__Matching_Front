<template>
  <div>
    <input type="file" ref="fileInput" @change="handleFileUpload" multiple />
    <button @click="uploadFiles">Upload</button>
  </div>
</template>

<script>
import RoadmapService from '@/services/main/RoadmapService';
export default {
  data() {
    return {
      filesToUpload: [],
    };
  },
  methods: {
    handleFileUpload(event) {
      this.filesToUpload = event.target.files;
    },
    async uploadFiles() {
      const formData = new FormData();

      for (let i = 0; i < this.filesToUpload.length; i++) {
        formData.append('files', this.filesToUpload[i]);
      }

      try {
        await RoadmapService.multiImageUp(formData);
      } catch (error) {
        console.error('Error uploading to S3:', error);
      }
    },
  },
};
</script>
