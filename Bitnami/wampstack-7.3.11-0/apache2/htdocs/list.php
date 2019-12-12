<?php
 $dir    = 'C:\Bitnami\wampstack-7.3.11-0\apache2\htdocs\FileUpload\uploads';
 // Open a directory, and read its contents
 if (is_dir($dir)){
   if ($dh = opendir($dir)){
     while (($file = readdir($dh)) !== false){
       echo "filename:" . $file . "<br>";
     }
     closedir($dh);
   }
 }
 ?>
