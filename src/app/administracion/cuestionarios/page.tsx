'use client';
import Header from '@/components/header';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { allData } from '@/models/dommy/encuesta';
import { Tag } from 'primereact/tag';
import CreateQuestionary from '@/components/createQuestionary';

const CREATE = 1;
const UPDATE = 2;

export default function Cuestionarios() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [mode, setMode] = useState<number>(CREATE);
  const [showPanel, setShowPanel] = useState<boolean>(false);

  const typeBodyTemplate = (questionary: any) => {
    // return (
    return questionary.public ? (
      <div className='flex h-[28px] w-[102px] items-center justify-center rounded-md border border-solid border-green-500 text-xs text-green-500'>
        Público
      </div>
    ) : (
      <div className='flex h-[28px] w-[102px] items-center justify-center rounded-md border border-solid border-blue-500 text-xs text-blue-500'>
        Privado
      </div>
    );
  };

  const userCreate = () => {
    setShowPanel(true);
  };

  const startContent = () => {
    return (
      <div className='flex gap-3 flex-wrap'>
        <Button
          label='Crear'
          icon='pi pi-plus'
          severity='success'
          size='small'
          onClick={userCreate}
          outlined
        />
        <Button
          label='Modificar'
          icon='pi pi-pencil'
          severity='info'
          size='small'
          // disabled={!selected}
          // onClick={userModify}
          outlined
        />
        <Button
          label='Eliminar'
          icon='pi pi-trash'
          severity='danger'
          size='small'
          // disabled={!selected}
          // onClick={confirm}
          outlined
        />
      </div>
    );
  };

  const endContent = () => {
    return (
      <div>
        <Button
          label='Exportar'
          className='bg-green-700'
          icon='pi pi-file-excel'
        ></Button>
      </div>
    );
  };

  return (
    <>
      <Header></Header>
      {/* {showPanel && ( */}
        <CreateQuestionary
          mode={mode}
          visible={showPanel}
          setVisible={setShowPanel}
        ></CreateQuestionary>
      {/* )} */}
      <section className='font-jaldi bg-dirty-white w-screen h-panel'>
        <div className='py-3'></div>
        <Toolbar
          className='bg-white md:mx-10'
          start={startContent}
          end={endContent}
        />
        {/* <h1 className='m-0 text-center'>Mis cuestionarios</h1> */}
        <div className='py-3 md:p-0'></div>
        <div className='bg-white p-5 md:p-10 md:m-10'>
          <DataTable
            value={allData}
            selectionMode='single'
            emptyMessage='Sin resultados'
            selection={selectedProduct}
            onSelectionChange={(e) => setSelectedProduct(e.value)}
            dataKey='id'
            tableStyle={{ minWidth: '50rem' }}
          >
            <Column field='id' header='Id'></Column>
            <Column field='title' header='Nombre'></Column>
            <Column field='created' header='Fecha Creado'></Column>
            <Column field='limitDate' header='Fecha Limite'></Column>
            <Column
              field='public'
              header='Tipo'
              body={typeBodyTemplate}
            ></Column>
          </DataTable>
        </div>
      </section>
    </>
  );
}
