import React from 'react';
import { Table as TableAnt } from 'antd';
import Text from 'components/Atoms/Text';

interface IProps {
	title: string;
	description: string;
	items: {
		id: string;
		property: string;
		description: string;
		type: string;
		default: string;
	}[]
}

const Table = ({ items }: IProps) => {
	const columns = [
		{
			title: 'Property',
			dataIndex: 'property',
		},
		{
			title: 'Description',
			dataIndex: 'description',
			render: (text: any) => <Text variant="ROBOT_14_28_400" html={text} />,
		},
		{
			title: 'Type',
			dataIndex: 'type',
			render: (text: any) => (
				<Text color="#c41d7f" variant="ROBOT_14_28_400">
					{text}
				</Text>
			),
		},
		{
			title: 'Default',
			dataIndex: 'default',
		},
	];

	return <TableAnt pagination={false} columns={columns} dataSource={items} />;
};

export default React.memo(Table);
