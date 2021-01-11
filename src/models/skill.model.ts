import { ApiProperty } from "@nestjs/swagger";

export class Skill {
    @ApiProperty()
    id?: String;

    @ApiProperty()
    name: String;

    @ApiProperty()
    description?: String;

    @ApiProperty()
    tasks?: Task[];
}

export class Task {
    @ApiProperty()
    name: String;

    @ApiProperty()
    description?: String;
}