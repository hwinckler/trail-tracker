import { Injectable, NgZone } from '@angular/core';
import { File, IWriteOptions } from '@ionic-native/file';

@Injectable()
export class TrailFileWriterProvider {

  private dir: string = "TrailTracker";
  private path: string = this._file.externalRootDirectory;
  private options: IWriteOptions = {
    append: true
  };

  public dirCreated: boolean = false;
  private fileName: string;

  constructor(private _zone: NgZone, private _file: File) {
  }

  showDirCreated(){
    this._zone.run(() => {
      this.dirCreated = true;
    });
  }

  prepare(fileName: string){
    this.fileName = fileName + ".txt";
    this._file.checkDir(this.path, this.dir)
    .then(() => {
      this.showDirCreated();
    })
    .catch(err => {
      this._file.createDir(this.path, this.dir, false)
      .then(() => {
        this.showDirCreated();
      })
      .catch(err => {
          alert('Failed to create dir!');
      });
    });    
  }

  write(text: string){
    if(this.dirCreated){
      this._file.checkFile(this.path + this.dir + '/', this.fileName)
      .then(() => {
        this._file.writeFile(this.path + this.dir + '/', this.fileName, text, this.options);
      }).catch(err => {
        this._file.createFile(this.path + this.dir + '/', this.fileName, true)
        .then(() => {
          this._file.writeFile(this.path + this.dir + '/', this.fileName, text, this.options);
        }).catch(err => {
          alert('Fail to create file!');
        });
      });
    }
  }

  rename(trailName: string){
    if(this.dirCreated){
      return this._file.checkFile(this.path + this.dir + '/', this.fileName)
      .then(() => {
        return this._file.moveFile(this.path + this.dir + '/', this.fileName, this.path + this.dir + '/', trailName + '.txt')
      });
    }
  }
}
