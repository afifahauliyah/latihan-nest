import { ApiProperty } from "@nestjs/swagger";
import { Jenis_kelamin } from "@prisma/client";
Jenis_kelamin
import { IsEnum,IsNotEmpty, IsString, Length } from "class-validator";

export class CreateMahasiswaDTO {

    @ApiProperty({ description : "NIM", type : String, example : "105841110622" })
    @IsString({message : "NIM Harus Bertipe String"})
    @IsNotEmpty({message : "Tidak Boleh Kosong"})
    @Length(1, 12, {message : "Hanya bisa sampai 12 karakter"})
    nim : string;

    @ApiProperty({description :"Nama", type : String, example : "Wa Nanda Sulystrian"})
    @IsString({message : "Nama Harus Bertipe String"})
    @IsNotEmpty({message : "Tidak Boleh Kosong"})
    @Length(1, 50, {message : "Hanya bisa sampai 50 karakter"})
    nama : string;

    @ApiProperty({description :"Kelas", type : String, example : "5C"})
    @IsString({message : "Kelas Harus Bertipe String"})
    @IsNotEmpty({message : "Tidak Boleh Kosong"})
    @Length(1, 2, {message : "Hanya bisa sampai 2 karakter"})
    kelas : string;

    @ApiProperty({description :"Jurusan", type : String, example : "Informatika"})
    @IsString({message : "Jurusan Harus Bertipe String"})
    @IsNotEmpty({message : "Tidak Boleh Kosong"})
    @Length(1, 20, {message : "Hanya bisa sampai 20 karakter"})
    jurusan : string;

    @ApiProperty({
        enum : Jenis_kelamin,
        description :"Jenis Kelamin",
        example : "P"
    })
    @IsEnum(Jenis_kelamin, {
        message : "Jenis Kelamin hanya bernilai L atau P"
    })
    jenis_kelamin : Jenis_kelamin

}