import { Component } from "@angular/core";
declare var alert;

@Component({
  selector: "app-gyosu",
  templateUrl: "./gyosu.component.html",
  styleUrls: ["./gyosu.component.scss"]
})
export class GyosuComponent {
  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: "http://localhost/FileUpload/index.php"
  };
  sizeLimit = 200000000000000000000;

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
      alert("File Uploaded");
    }
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert("File is too large");
    }
  }
}
