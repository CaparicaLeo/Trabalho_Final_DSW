import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity()
export class Enterprise {
	@PrimaryGeneratedColumn("uuid")
	id: string;
	@Column()
	name: string;
	@Column()
	cnpj: string;
	@Column()
	endereço: string;
	@Column()
	telephone: string;
	@Column()
	activity: string;
	@CreateDateColumn()
	created_at: Date;
	@UpdateDateColumn()
	updated_at: Date;
}
