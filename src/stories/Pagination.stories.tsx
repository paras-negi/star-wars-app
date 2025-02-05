import Pagination from '../components/Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const Default = () => <Pagination currentPage={2} totalPages={5} />;