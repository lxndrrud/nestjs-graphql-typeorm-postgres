import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'; 

export interface IProductCreate {
   title: string
}

export interface IProduct extends IProductCreate {
   id: number
}


@ObjectType()
@Entity({ name: "public.products" }) 
export class Product implements IProduct { 
   @Field()
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Field()
   @Column() 
   title: string;
}