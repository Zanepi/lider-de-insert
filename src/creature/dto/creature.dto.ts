type PictureDefinition = 
    {   pictureDescription: string,
        pictureURL: string
    };

export class CreatureDTO {
    name: string;

    pictures: PictureDefinition[];

    description: string; 

}